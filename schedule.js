function validasiJadwal(tanggal, durasi) {
  const hariIni = new Date().toISOString().split("T")[0];
  if (!tanggal) return "Tanggal wajib diisi";
  if (tanggal < hariIni) return "Tanggal tidak boleh di masa lalu";
  if (durasi > maxDurasiJam) return "Durasi melebihi batas " + maxDurasiJam + " jam";
  return "Jadwal valid";
}