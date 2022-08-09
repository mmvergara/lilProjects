$("#reset").click(() => {
  window.location.reload(true);
});

let picked = [];

$("#pickRandom").click(() => {
  $("#pickedStudent").html("");
  let StudentList = String($("#textArea").val()).split(",");
  let selectedStudent =
    StudentList[Math.floor(Math.random() * StudentList.length)];
  if (picked.indexOf(selectedStudent) > -1) {
    $("#luckyStudent").html(selectedStudent);
    $("#pickedStudent").html(" was already picked last time, try again");
    picked.push(selectedStudent);
  } else {
    $("#luckyStudent").html(selectedStudent);
    picked.push(selectedStudent);
  }
  picked = [...new Set(picked)];
  console.log(picked);
});

$("#pickRandomNew").click(function Unique() {
  $("#pickedStudent").html("");
  let StudentList = String($("#textArea").val()).split(",");
  let selectedStudent =
    StudentList[Math.floor(Math.random() * StudentList.length)];
  if (picked.length == StudentList.length) {
    alert("No more students that wasn't picked before");
    return;
  }

  if (picked.indexOf(selectedStudent) > -1) {
    picked = [...new Set(picked)];
    Unique();
    return;
  } else {
    $("#luckyStudent").html(selectedStudent);
    picked.push(selectedStudent);
  }
  picked = [...new Set(picked)];
  console.log(picked);
});
