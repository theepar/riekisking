import Lharga from 'LabelHarga.jsx'

function KartuMenu({nama,harga,kategori = 'Makanan'}) {
  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <Lharga>{harga}</Lharga>
      <p>{kategori ? '' : 'Makanan'}</p>
    </div>
  );
}
export default KartuMenu