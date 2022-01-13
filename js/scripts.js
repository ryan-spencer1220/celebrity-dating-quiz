$(document).ready(function () {
  $("form#celebrity-quiz").submit(function (event) {
    event.preventDefault();
    const idealDate = $("select#ideal-date").val();
    const personalityTrait = $("select#personality-trait").val();
    const physicalTrait = $("select#physical-trait").val();
    if (
      idealDate === "movies" &&
      personalityTrait === "sense-of-humor" &&
      physicalTrait === "eyes"
    ) {
      $("#seth-rogen").show();
      $("#alison-brie").show();
      $("#john-hamm").hide();
      $("#lady-gaga").hide();
      $("#dwayne-johnson").hide();
      $("#madonna").hide();
      $("#default").hide();
    } else if (idealDate === "dinner" && personalityTrait === "kindness") {
      $("#john-hamm").show();
      $("#lady-gaga").show();
      $("#dwayne-johnson").hide();
      $("#madonna").hide();
      $("#seth-rogen").hide();
      $("#alison-brie").hide();
      $("#default").hide();
    } else if (physicalTrait === "arms") {
      $("#dwayne-johnson").show();
      $("#madonna").show();
      $("#john-hamm").hide();
      $("#lady-gaga").hide();
      $("#seth-rogen").hide();
      $("#alison-brie").hide();
      $("#default").hide();
    } else {
      $("#default").show();
    }
  });
});
