import React from "react";

function Ratings({ isChanged }) {
  return (
    <div className=" border-2 rounded-lg w-full mx-auto pl-10 bg-white hidden sm:inline-block">
      <div>
        <form action="/action_page.php">
          <div className="my-10">
            <p className="mb-2 leading-8 text-sm font-bold text-blue-600">
              Ratings
            </p>
            <form>
              <input
                type="radio"
                id="Ratings"
                name="filter_ratings"
                value="Ratings"
              ></input>
              <label htmlFor="Ratings">
                <span className="pl-2">4.5 & above</span>
              </label>
              <br></br>
              <input
                type="radio"
                id="Ratings"
                name="filter_Ratings"
                value="Ratings"
              ></input>
              <label htmlFor="Ratings">
                <span className="pl-2">4.0 & above</span>
              </label>
              <br></br>
              <input
                type="radio"
                id="Ratings"
                name="filter_ratings"
                value="Ratings"
              ></input>
              <label htmlFor="Ratings">
                <span className="pl-2">3.5 & above</span>
              </label>{" "}
              <br></br>
              <input
                type="radio"
                id="Ratings"
                name="filter_ratings"
                value="Ratings"
              ></input>
              <label htmlFor="Ratings">
                <span className="pl-2">3.0 & above</span>
              </label>
            </form>
          </div>
          <div className="mb-10">
            <form onInput="result.value = slider.value">
              <label className="mb-2 leading-8 text-sm font-bold text-blue-600">
                Filter by price
              </label>
              <br />
              <input
                type="range"
                id="slider"
                min="100"
                max="1000"
                step="10"
                value="30"
              ></input>{" "}
              <br />
              The value is
              <output name="result" htmlFor="slider">
                30
              </output>
              PSI
            </form>
          </div>
          <div className="mb-10">
            <p className="mb-2 leading-8 text-sm font-bold text-blue-600">
              Topic
            </p>
            <form>
              <input
                type="checkbox"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">Science</span>
              </label>
              <br></br>
              <input
                type="checkbox"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">Mathematics</span>
              </label>
              <br></br>
              <input
                type="checkbox"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">Geography</span>
              </label>{" "}
              <br></br>
              <input
                type="checkbox"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">design</span>
              </label>
              <br></br>
              <input
                type="checkbox"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">computer Studies</span>
              </label>
              <br></br>
              <input
                type="checkbox"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">Literature</span>
              </label>
            </form>
          </div>
          <div>
            <p className="mb-2 leading-8 text-sm font-bold text-blue-600">
              Video Duration
            </p>

            <form>
              <input
                type="radio"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">0-1 hour</span>
              </label>
              <br></br>
              <input
                type="radio"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">1-3 hours</span>
              </label>
              <br></br>
              <input
                type="radio"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">3-6 hours</span>
              </label>{" "}
              <br></br>
              <input
                type="radio"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">6-9 hours</span>
              </label>
              <br></br>
              <input
                type="radio"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">9-12 hours</span>
              </label>
              <br></br>
              <input
                type="radio"
                id="Video"
                name="filter_Video"
                value="Video"
              ></input>
              <label htmlFor="Video">
                <span className="pl-2">12 hours & above</span>
              </label>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ratings;
