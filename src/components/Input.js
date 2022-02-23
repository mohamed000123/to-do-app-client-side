export const Input = ({holder, setValue})=>{
    const handleChange = (e) => {
        setValue(e.target.value);
      };
      return ( 
        <input  className="form-control"  type="text" placeholder= {holder}
            onChange={handleChange}
          />

      );
    
}