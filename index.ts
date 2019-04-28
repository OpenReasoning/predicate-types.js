export class Symbol {
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

type ConnectiveUnion = Connective | Symbol | string;

export class Connective {
    arity: number;
    args: (Connective | Symbol)[] = [];

    constructor(...args: (ConnectiveUnion)[]) {
        args.forEach((arg: ConnectiveUnion) => {
            if (typeof arg === 'string') {
                arg = new Symbol(arg);
            }
            this.args.push(arg);
        });
        this.arity = this.args.length;
    }
}

export class Not extends Connective {
    constructor(arg: ConnectiveUnion) {
        super(arg);
    }
}

export class And extends Connective {
    constructor(arg1: ConnectiveUnion, arg2: ConnectiveUnion) {
        super(arg1, arg2);
    }
}

export class Or extends Connective {
    constructor(arg1: ConnectiveUnion, arg2: ConnectiveUnion) {
        super(arg1, arg2);
    }
}

export class If extends Connective {
    constructor(arg1: ConnectiveUnion, arg2: ConnectiveUnion) {
        super(arg1, arg2);
    }
}

export class Iff extends Connective {
    constructor(arg1: ConnectiveUnion, arg2: ConnectiveUnion) {
        super(arg1, arg2);
    }
}
