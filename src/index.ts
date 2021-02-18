interface User {
	id: number;
	name: string;
}

class UserAccount {
	name: string;
	id: number;

	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const user: User = new UserAccount('Test', 1);
console.log(user.id);
console.log(user.name);
