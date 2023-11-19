  const searchList = (listData, searchTerms, searchTarget) => {
    if (searchTerms === "") {
      return listData;
    } else {
      return listData.filter((data) =>
        data[searchTarget].toLowerCase().includes(searchTerms.toLowerCase())
      );
    }
};
  
export default searchList;