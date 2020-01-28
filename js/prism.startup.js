if (Prism) {
  Prism.languages.bat = Prism.languages.bash;
  Prism.languages.sh = Prism.languages.bash;
  document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('.highlighter-rouge').forEach(function (el) {
      el.classList.add('language-bash');
    });
  });
}
