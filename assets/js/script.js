window.onload = function() {
  openSidebarBtn = document.getElementById("openSidebarBtn");
  openSidebarBtn.addEventListener('click', function () {
    sidebar = document.getElementById("sidebar");
    sidebar.classList.remove('sidebar__hide');
  });
  closeSidebarBtn = document.getElementById("closeSidebarBtn");
  closeSidebarBtn.addEventListener('click', function () {
    sidebar = document.getElementById("sidebar");
    sidebar.classList.add('sidebar__hide');
  });
};