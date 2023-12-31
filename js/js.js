const menuSection = document.querySelectorAll('.menu-section')
const menuTab = document.querySelectorAll('.menu-tab')

const showInfo = id => {
	menuSection.forEach(section => (section.style.display = 'none'))
	menuTab.forEach(tab => tab.classList.remove('menu-tab-active'))

	document.getElementById(id).style.display = 'block'

	const currentActiveButton = document.querySelector(`[data-id=${id}]`)
	currentActiveButton.classList.add('menu-tab-active')
}
