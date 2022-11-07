function submitForm() {
  console.log("submit");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var x = document.getElementById("dateinput");
  var date = x.value;
  var datearray = date.split("-");
  var year = datearray[0];
  var month = datearray[1];
  var day = datearray[2];

  var monthname = parseInt(month);
  var reportID = day + "" + monthname + "" + year;
  fetchReport(reportID);
}

const fetchReport = (reportID) => {
  axios
    .get("https://pulugampallavi.github.io/webapp-automation/" + reportID + "/")
    .then((response) => {
      console.log(response);
      window.open(
        "https://pulugampallavi.github.io/webapp-automation/" + reportID + "/"
      );
    })
    .catch((error) => {
      console.log(error);
      alert("Report not found");
    });
};
