export const promises = (
    categorys,
    setMessage,
    setIsSuccess,
    setIsLoading,
    setIsFinished,
    setCurrentCategory
  ) => {
    const categoryResponse = new Promise((resolve, reject) => {


      // Synchronous code
      setTimeout(() => {
        resolve(categorys);
      }, 1000);
      // reject("This petition is rejected");
    });
  
    categoryResponse
      .then((result) => {
        setMessage(`Result is correct ${JSON.stringify(result)}`);
        setIsSuccess(true);
        setCurrentProducts(result);
      })
      .catch((error) => {
        console.log(`Error in progress ${error}`);
        setMessage(`Error: ${error}`);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
      });
  };
  