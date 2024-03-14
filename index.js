const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("click", () => {
  // Construct the direct download link from the Google Drive link
  const fileID = "16zgiucW79OvmKctW9H0DZ0TqY7JSgZyA"; // Extracted from the original link
  const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;
  //   const directLink = `https://drive.google.com/file/d/${fileID}/preview`;

  const downloadLink = document.createElement("a");

  downloadLink.href = directDownloadLink;

  downloadLink.download = "Resume.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();
  //   window.location.href = directLink;
});
