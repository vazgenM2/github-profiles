let them = false // false = light, true = dark
document.querySelector('.them').addEventListener('click', () => { // change them
	them = !them
	document.querySelector('.them').classList.toggle('active')
	render()
})

function render() {
	if (them) { // dark them
		document.querySelector('.wrapper').style.backgroundColor = '#555'
		document.querySelector('header').style.backgroundColor = '#222'
		document.querySelector('main').style.color = '#fff'
	} else {  // light them
		document.querySelector('.wrapper').style.backgroundColor = '#a7b7ce'
		document.querySelector('header').style.backgroundColor = '#607188'
		document.querySelector('main').style.color = '#000'
	}
}
render() // render them when page reloaded

document.querySelector('.find-user').addEventListener('click', async () => {
	let userName = document.querySelector('.username').value

	if (userName) {
		let user = await fetch(`https://api.github.com/users/${userName}`)
		user = await user.json()

		if (!user.message) {
			document.querySelector('.user-img').src = user.avatar_url
			document.querySelector('.user-img').style.display = 'block'
			document.querySelector('.user-bio').style.display = 'block'
			document.querySelector('.user-email').style.display = 'block'
			document.querySelector('.user-location').style.display = 'block'

			document.querySelector('.user-name').innerHTML = user.login
			document.querySelector('.user-flowers').innerHTML = "Folowers: " + user.followers
			document.querySelector('.user-flowings').innerHTML = "Folowings: " + user.following
			document.querySelector('.user-createdDate').innerHTML = "Created at: " + user.created_at.substring(0, 10)
			document.querySelector('.user-repos').innerHTML = "Repositories: " + user.public_repos
			if (user.email) document.querySelector('.user-email').innerHTML = "Email: " + user.email
			else document.querySelector('.user-email').style.display = 'none'
			if (user.location) document.querySelector('.user-location').innerHTML = "Location: " + user.location
			else document.querySelector('.user-location').style.display = 'none'
			if (user.bio) document.querySelector('.user-bio').innerHTML = "Biography: " + user.bio
			else document.querySelector('.user-bio').style.display = 'none'
		}
	}
})