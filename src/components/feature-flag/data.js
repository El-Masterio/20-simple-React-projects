const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
  showQRGenerator: true,
};

function fetureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    // if data is present then resolve will be in .5 s
    else reject('Some error occured! Please try again'); // if no data then reject with this message
  });
}

export default fetureFlagsDataServiceCall;
