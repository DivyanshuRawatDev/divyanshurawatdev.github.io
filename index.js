const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("click", () => {
  const fileID = "16zgiucW79OvmKctW9H0DZ0TqY7JSgZyA";
  const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;

  const downloadLink = document.createElement("a");

  downloadLink.href = directDownloadLink;

  downloadLink.download = "Resume.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();
});
