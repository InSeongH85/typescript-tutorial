declare function create(o: object | null): void;

create({ prop: 0 });
create(null);

// 아래 것들은 다 오류
// create(42);
// create('string');
// create(false);
// create(undefined);
