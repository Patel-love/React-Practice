import Card from "./Components/Card";
// import dangal from "./assets/Dangal.jpg";
// import bahubali from "./assets/bahubali.webp";
// import rrr from "./assets/rrr.jpg";
// import kgf from "./assets/kgf.jpg";
// import jawan from "./assets/jawan.avif";
// import pathhan from "./assets/Pathaan.jpg";
// import kalki from "./assets/kalki.jpg";
// import animal from "./assets/animal.jpg";
// import bajrangi from "./assets/bajrangi.jpg";
// import secret from "./assets/secret.jpg";

function App() {
  return (
    <>

<h1 className="text-center m-5 "><i>Top 10 Highest Grossing Movie In India</i></h1>
      <div className="container m-auto">
        <div className="row text-center m-5">
          <div className="col-4">
            <Card myimage='Dangal.jpg' rupee="1924.7" director="Nitesh Tiwari"/>
          </div>
          <div className="col-4">
            <Card myimage="bahubali.webp" rupee="1742.3" director="S.S. Rajamouli" />
          </div>
          <div className="col-4">
            <Card myimage="rrr.jpg" rupee="1250.9" director="S.S. Rajamouli" />
          </div>
        </div>
        <div className="row  m-5">
         
          <div className="col-4">
            <Card myimage='kgf.jpg' rupee="1175.4" director="Prashanth Neel" />
          </div>
          <div className="col-4">
            <Card myimage='jawan.avif' rupee="1167.3" director="Atlee" />
          </div>
          <div className="col-4">
            <Card myimage='Pathaan.jpg' rupee="1042.2" director="Siddharth Anand" />
          </div>
        </div>
        <div className="row  m-5">
       
        </div>
        <div className="row  m-5">
          <div className="col-4">
            <Card myimage='kalki.jpg' rupee="969.5" director="Nag Ashwin" />
          </div>
          <div className="col-4">
            <Card myimage='animal.jpg'rupee="908.6" director="Sandeep Reddy Vanga" />
          </div>
          <div className="col-4">
            <Card myimage='bajrangi.jpg' rupee="858.8" director="Kabir Khan" />
          </div>
        </div>
        <div className="row  m-5">
          <div className="col-4 m-auto">
            <Card myimage='secret.jpg' rupee="830.8" director="Advait Chandan" />
          </div>
        </div>





    {/* <h1 className="text-center m-5 "><i>Top 10 Highest Grossing Movie In India</i></h1>
      <div className="container m-auto">
        <div className="row text-center m-5">
          <div className="col-4">
            <Card img={dangal} rupee="1924.7" director="Nitesh Tiwari"/>
          </div>
          <div className="col-4">
            <Card img={bahubali} rupee="1742.3" director="S.S. Rajamouli" />
          </div>
          <div className="col-4">
            <Card img={rrr} rupee="1250.9" director="S.S. Rajamouli" />
          </div>
        </div>
        <div className="row  m-5">
         
          <div className="col-4">
            <Card img={kgf} rupee="1175.4" director="Prashanth Neel" />
          </div>
          <div className="col-4">
            <Card img={jawan} rupee="1167.3" director="Atlee" />
          </div>
          <div className="col-4">
            <Card img={pathhan} rupee="1042.2" director="Siddharth Anand" />
          </div>
        </div>
        <div className="row  m-5">
       
        </div>
        <div className="row  m-5">
          <div className="col-4">
            <Card img={kalki} rupee="969.5" director="Nag Ashwin" />
          </div>
          <div className="col-4">
            <Card img={animal} rupee="908.6" director="Sandeep Reddy Vanga" />
          </div>
          <div className="col-4">
            <Card img={bajrangi} rupee="858.8" director="Kabir Khan" />
          </div>
        </div>
        <div className="row  m-5">
          <div className="col-4 m-auto">
            <Card img={secret} rupee="830.8" director="Advait Chandan" />
          </div>
        </div>


 */}







        {/* <div className="container m-auto">
      <div className="row text-center m-5">
        <div className="col-6"><Card img={dangal} rupee="1924.7"/></div>
        <div className="col-6"><Card img={bahubali} rupee="1742.3"/></div>
      </div>
      <div className="row  m-5">
        <div className="col-6"><Card img={rrr} rupee="1250.9"/></div>
        <div className="col-6"><Card img={kgf} rupee="1175.4"/></div>
      </div>
      <div className="row  m-5">
        <div className="col-6"><Card img={jawan} rupee="1167.3"/></div>
        <div className="col-6"><Card img={pathhan} rupee="1042.2"/></div>
      </div>
      <div className="row  m-5">
        <div className="col-6"><Card img={kalki} rupee="969.5"/></div>
        <div className="col-6"><Card img={animal} rupee="908.6"/></div>
      </div>
      <div className="row  m-5">
        <div className="col-6"><Card img={bajrangi} rupee="858.8"/></div>
        <div className="col-6"><Card img={secret} rupee="830.8"/></div>
      </div> */}
      </div>
    </>
  );
}

export default App;
