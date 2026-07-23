import initSqlJs, { Database, SqlJsStatic } from 'sql.js';

export interface ReservationData {
  name: string;
  phone: string;
  email?: string | null;
  party_size: number;
  date: string;
  time: string;
  notes?: string | null;
}

export interface ReservationRecord extends ReservationData {
  id: number;
  created_at: string;
}

const STORAGE_KEY = 'gebeta_sqlite_db';
let dbInstance: Database | null = null;
let SQL: SqlJsStatic | null = null;
let initPromise: Promise<Database> | null = null;

export async function getSqliteDb(): Promise<Database> {
  if (dbInstance) return dbInstance;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    if (!SQL) {
      SQL = await initSqlJs({
        locateFile: (file) => `/${file}`,
      });
    }

    const savedDbBase64 = localStorage.getItem(STORAGE_KEY);
    if (savedDbBase64) {
      try {
        const binaryString = window.atob(savedDbBase64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        dbInstance = new SQL.Database(bytes);
      } catch (err) {
        console.warn('Failed to load saved SQLite DB from storage, initializing new database:', err);
        dbInstance = new SQL.Database();
      }
    } else {
      dbInstance = new SQL.Database();
    }

    dbInstance.run(`
      CREATE TABLE IF NOT EXISTS reservations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        party_size INTEGER NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        notes TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );
    `);

    saveDbToStorage();
    return dbInstance;
  })();

  return initPromise;
}

function saveDbToStorage(): void {
  if (!dbInstance) return;
  try {
    const data = dbInstance.export();
    let binary = '';
    const len = data.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(data[i]);
    }
    const base64 = window.btoa(binary);
    localStorage.setItem(STORAGE_KEY, base64);
  } catch (err) {
    console.error('Failed to persist SQLite database to storage:', err);
  }
}

export async function insertReservation(res: ReservationData): Promise<ReservationRecord> {
  const db = await getSqliteDb();
  const stmt = db.prepare(`
    INSERT INTO reservations (name, phone, email, party_size, date, time, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `);
  stmt.run([
    res.name,
    res.phone,
    res.email || null,
    res.party_size,
    res.date,
    res.time,
    res.notes || null,
  ]);
  stmt.free();

  saveDbToStorage();

  const resStmt = db.prepare('SELECT * FROM reservations ORDER BY id DESC LIMIT 1;');
  let createdRecord: ReservationRecord | null = null;
  if (resStmt.step()) {
    const row = resStmt.getAsObject();
    createdRecord = {
      id: Number(row.id),
      name: String(row.name),
      phone: String(row.phone),
      email: row.email ? String(row.email) : null,
      party_size: Number(row.party_size),
      date: String(row.date),
      time: String(row.time),
      notes: row.notes ? String(row.notes) : null,
      created_at: String(row.created_at),
    };
  }
  resStmt.free();

  if (!createdRecord) {
    throw new Error('Failed to retrieve inserted reservation from SQLite database');
  }

  return createdRecord;
}

export async function getReservations(): Promise<ReservationRecord[]> {
  const db = await getSqliteDb();
  const stmt = db.prepare('SELECT * FROM reservations ORDER BY id DESC;');
  const results: ReservationRecord[] = [];
  while (stmt.step()) {
    const row = stmt.getAsObject();
    results.push({
      id: Number(row.id),
      name: String(row.name),
      phone: String(row.phone),
      email: row.email ? String(row.email) : null,
      party_size: Number(row.party_size),
      date: String(row.date),
      time: String(row.time),
      notes: row.notes ? String(row.notes) : null,
      created_at: String(row.created_at),
    });
  }
  stmt.free();
  return results;
}

export async function exportSqliteDatabaseFile(): Promise<void> {
  const db = await getSqliteDb();
  const data = db.export();
  const blob = new Blob([data], { type: 'application/x-sqlite3' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'gebeta_reservations.sqlite';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
