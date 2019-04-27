class Symbol {
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

type StringSymbol = string | Symbol;

class Connective {
    arity: number;
    args: Symbol[] = [];

    constructor(...args: (StringSymbol)[]) {
        args.forEach((arg: StringSymbol) => {
            if (typeof arg === 'string') {
                arg = new Symbol(arg);
            }
            this.args.push(arg);
        });
        this.arity = this.args.length;
    }
}

class Not extends Connective {
    constructor(arg: StringSymbol) {
        super(arg);
    }
}

class And extends Connective {
    constructor(arg1: StringSymbol, arg2: StringSymbol) {
        super(arg1, arg2);
    }
}

class Or extends Connective {
    constructor(arg1: StringSymbol, arg2: StringSymbol) {
        super(arg1, arg2);
    }
}

class If extends Connective {
    constructor(arg1: StringSymbol, arg2: StringSymbol) {
        super(arg1, arg2);
    }
}

class Iff extends Connective {
    constructor(arg1: StringSymbol, arg2: StringSymbol) {
        super(arg1, arg2);
    }
}
