import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";

const namaPanggilan = "Deva";
const N = 16;
const namaKantin = { color: "#1f3a5f", fontSize: "28px" };

function App() {
  const jam = 9;
  var finalHarga = 10000 + N * 100;

  return (
    <>
      <h1 className="namaKantin" style={namaKantin}>
        Kantin {namaPanggilan}
      </h1>
      <p>{jam < 12 ? "selamat pagi" : "selamat siang"}</p>
      <p>saldo awal : {N * 1000}</p>
      <button disabled>bayar</button>

      <Panel judul={"Menu hari ini"}>
        <KartuMenu
          nama="Nasi ayam geprek" 
          harga={finalHarga}
          kategori="Makanan"
        ></KartuMenu>
        <KartuMenu
          nama="Es teh lemon"
          harga={13700}
          kategori="Makanan"
        ></KartuMenu>
        <KartuMenu
          nama="Mie goreng telur"
          harga={12000}
          kategori="Makanan"
        ></KartuMenu>
      </Panel>
    </>
  );
}

export default App;
