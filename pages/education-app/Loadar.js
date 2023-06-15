
import { RotatingLines } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

 const Loader = () => {
    return (
      <div style={{
       marginTop:"100px", textAlign:"center"
      }}>
        <RotatingLines
         strokeColor="grey"
         strokeWidth="5"
         animationDuration="0.75"
         width="46"
          visible={true}
         />
      </div>
    );
  };

  export default Loader;