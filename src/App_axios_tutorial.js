import React, { useState } from 'react';
import axios from 'axios';

const App_axios_tutorial = () => {
  const [data, setData] = useState(null);
  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  // api key : ba6ad61e6af045cfb3d1bd99fca11187

  /* async 사용 */
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=ba6ad61e6af045cfb3d1bd99fca11187',
      );
      setData(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App_axios_tutorial;
