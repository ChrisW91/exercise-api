import { useState, useEffect } from "react";


const apiKey = import.meta.env.VITE_X_API_KEY;



function App() {
  const [exercisesCache, setExercisesCache] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);




  useEffect(() => {
    fetchAllExercises();
  }, []);

  const fetchAllExercises = async () => {
    return new Promise(async (resolve, reject) => {
      if (Object.keys(exercisesCache).length === 0) {
        const apiUrl = `https://b8g31172b2.execute-api.ap-southeast-2.amazonaws.com/exercises`;
        try {
          const response = await fetch(apiUrl, {
            headers: {
              'x-api-key': apiKey,

            },
          });
          const responseData = await response.json();
          const exercisesData = JSON.parse(responseData.body);

          if (Array.isArray(exercisesData)) {
            setExercisesCache({ all: exercisesData });
            resolve(); // Resolve the promise once the state is updated
          } else {
            console.error('Fetched data is not an array:', exercisesData);
            reject('Data is not an array');
          }
        } catch (error) {
          console.error("Failed to fetch exercises:", error);
          reject(error);
        }
      } else {
        resolve(); // Resolve immediately if the cache already has data
      }
    });

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const handleSearchClick = () => {
    performSearch();
  };

  const performSearch = () => {

    if (searchTerm && exercisesCache.all) {
      const filteredExercises = exercisesCache.all.filter(exercise =>
        exercise.muscle_group && exercise.muscle_group.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredExercises.length > 0) {
        setSelectedExercise(filteredExercises[0]);
      } else {
        setSelectedExercise(null);
      }
    } else {
      setSelectedExercise(null);
    }
  };



  return (
    <>
      <div className="hero-banner">

        <h1 className="api-title">
          Exercise API Demo
        </h1>

        <div className="paragraph">
          <p >Welcome to my fitness exercise API demonstration! This webpage showcases a simple yet powerful API designed to enrich your fitness application or website with a vast library of exercise information. Below, you'll find an example of the JSON data returned by our API, featuring detailed attributes such as muscle name, muscle group, lift type, equipment required, a video tutorial link, and relevant tags. Our API is built on a robust AWS infrastructure, utilizing RDS with PostgreSQL for database management, Lambda for serverless compute functions, and API Gateway for seamless access. This efficient and scalable solution is perfect for developers looking to integrate comprehensive exercise data into their projects, providing users with valuable insights to enhance their fitness journey. Explore the example below to see how our API can serve as a cornerstone for your fitness-related content, driving both engagement and value.</p>
        </div>
        <div className="json-container">
          <div className="search-area">
            <input
              type="text"
              className="search-box"
              placeholder="Search muscle group..."
              onKeyDown={handleKeyDown}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearchClick}>Search</button>
          </div>


          <div className="json-example">
            <pre>{selectedExercise ? JSON.stringify(selectedExercise, null, 2) : 'No exercise selected or found.'}</pre>
          </div>
        </div>

      </div>


    </>
  )

}

export default App
