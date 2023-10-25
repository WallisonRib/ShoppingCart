
const fetchItem = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${query}`);
    const data = await response.json();
  
    return data;
  };
  
  export default fetchItem;