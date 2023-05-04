import "./App.css";
import { useState } from "react";

function App() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [dataNilai1, setDataNilai1] = useState({});
  const [dataNilai2, setDataNilai2] = useState({});
  const [dataNilai3, setDataNilai3] = useState({});
  const [dataNilai4, setDataNilai4] = useState({});
  const updateData = (e) => {
    const test = e.target.id.slice(-11);

    if (e.target.id.includes("aspek_penilaian_1")) {
      if (e.target.id.includes("mahasiswa_10")) {
        const test = e.target.id.slice(-12);
        setDataNilai1({
          ...dataNilai1,
          [test]: e.target.value,
        });
      } else {
        setDataNilai1({
          ...dataNilai1,
          [test]: e.target.value,
        });
      }
    }
    if (e.target.id.includes("aspek_penilaian_2")) {
      if (e.target.id.includes("mahasiswa_10")) {
        const test = e.target.id.slice(-12);
        setDataNilai2({
          ...dataNilai2,
          [test]: e.target.value,
        });
      } else {
        setDataNilai2({
          ...dataNilai2,
          [test]: e.target.value,
        });
      }
    }
    if (e.target.id.includes("aspek_penilaian_3")) {
      if (e.target.id.includes("mahasiswa_10")) {
        const test = e.target.id.slice(-12);
        setDataNilai3({
          ...dataNilai3,
          [test]: e.target.value,
        });
      } else {
        setDataNilai3({
          ...dataNilai3,
          [test]: e.target.value,
        });
      }
    }
    if (e.target.id.includes("aspek_penilaian_4")) {
      if (e.target.id.includes("mahasiswa_10")) {
        const test = e.target.id.slice(-12);
        setDataNilai4({
          ...dataNilai4,
          [test]: e.target.value,
        });
      } else {
        setDataNilai4({
          ...dataNilai4,
          [test]: e.target.value,
        });
      }
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log({
      aspek_penilaian_1: { ...dataNilai1 },
      aspek_penilaian_2: { ...dataNilai2 },
      aspek_penilaian_3: { ...dataNilai3 },
      aspek_penilaian_4: { ...dataNilai4 },
    });
  };

  return (
    <div className="App">
      <h1>Aspek Penilaian mahasiswa</h1>
      {number.map((mahasiswa) => (
        <div className="wrapper-table">
          <div>Mahasiswa {mahasiswa}</div>
          <div className="content-nilai">
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                paddingRight: "10px",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                Aspek <br></br> Penilaian 1
              </div>
              <select
                onChange={updateData}
                name="aspek_penilaian_1"
                id={"aspek_penilaian_1_mahasiswa_" + mahasiswa}
              >
                {number.map((i) => (
                  <option key={i + 1} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                paddingRight: "10px",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                Aspek <br></br> Penilaian 2
              </div>
              <select
                onChange={updateData}
                name={"aspek_penilaian_2"}
                id={"aspek_penilaian_2_mahasiswa_" + mahasiswa}
              >
                {number.map((i) => (
                  <option key={i + 2} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                paddingRight: "10px",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                Aspek <br></br> Penilaian 3
              </div>
              <select
                onChange={updateData}
                name={"aspek_penilaian_3"}
                id={"aspek_penilaian_3_mahasiswa_" + mahasiswa}
              >
                {number.map((i) => (
                  <option key={i + 3} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                width: "75%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                paddingRight: "10px",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                Aspek <br></br> Penilaian 4
              </div>
              <select
                onChange={updateData}
                name={"aspek_penilaian_4"}
                id={"aspek_penilaian_4_mahasiswa_" + mahasiswa}
              >
                {number.map((i) => (
                  <option key={i + 4} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
      <button onClick={submit}>Simpan</button>
    </div>
  );
}

export default App;
