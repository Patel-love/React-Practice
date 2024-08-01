import Common from "./Common";

function Gallery() {
  return (
    <>
      <h1 className="bg-dark text-white text-center">Notable Scientists</h1>

      <div className="row w-100 my-5 py-5">
        <div className="col-6">
          <Common
            image={"szV5sdG"}
            name={"Maria Skłodowska-Curie"}
            profession={" physicist and chemist"}
            award={
              "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            }
            dis={" polonium (chemical element)"}
            count={"4"}
          />
        </div>
        <div className="col-6">

        <Common
          image={"YfeOqp2"}
          name={"Katsuko Saruhashi"}
          profession={"    geochemist"}
          award={"(Miyake Prize for geochemistry, Tanaka Prize)"}
          dis={" a method for measuring carbon dioxide in seawater"}
          count={"2"}
        />
        </div>
      </div>
    </>
  );
}

export default Gallery;

// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.
// You’ll need to choose what props to pass to it.

