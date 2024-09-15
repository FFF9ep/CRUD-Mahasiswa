import React from "react"

import "../styles/ModalTambah.css"

const ModalTambah = () => {
  return (
    <div className="modalTambah">
      <div className="header">
        <h2>Tambah Data Mahasiswa</h2>
        <button>X</button>
      </div>
      <form>
        <div>
          <label htmlFor="nama">Nama Lengkap</label>
          <input type="text" name="nama" id="nama" placeholder="Masukkan nama lengkap mahasiswa" />
        </div>
        <div>
          <label htmlFor="nim">NIM</label>
          <input type="text" name="nim" id="nim" placeholder="Masukkan NIM lengkap mahasiswa" />
        </div>
        <div>
          <label htmlFor="alamat">Alamat</label>
          <input type="text" name="alamat" id="alamat" placeholder="Masukkan alamat lengkap mahasiswa" />
        </div>
        <div>
          <label htmlFor="ttl">Tempat dan Tanggal lahir</label>
          <input type="text" name="ttl" id="ttl" placeholder="Masukkan tempat dan tanggal lahir mahasiswa" />
        </div>
        <button type="submit">Tambah Data Mahasiswa</button>
      </form>
    </div>
  )
}

export default ModalTambah
