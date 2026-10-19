import LabelHarga from './LabelHarga.jsx'

function KartuMenu({nama,kategori = 'Makanan',harga}) {
  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <p>{kategori}</p>
      <LabelHarga nilai={harga}></LabelHarga>
    </div>
  );
}
export default KartuMenu