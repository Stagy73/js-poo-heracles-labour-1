const maxLife = 100;
class Fighter {
    constructor(name, strength, dexterity, attackName) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.maxLife = 100;
        this.life = this.maxLife;
        this.attackName = attackName;
    }

    attack(defender) {
        const damage = this.calculateDamage(defender);
        defender.takeDamage(damage);
        return `${this.name} inflige ${damage} points de dégâts à ${defender.name} (${defender.life}/${defender.maxLife} PV restants)`;
    }

    calculateDamage(defender) {
        const attackerDamage = Math.floor(Math.random() * this.strength) + 1;
        const defenderReducedDamage = defender.dexterity <= attackerDamage ? attackerDamage - defender.dexterity : 0;
        return defenderReducedDamage;
    }

    fight(defender) {
        const messages = [];
        while (this.life > 0 && defender.life > 0) {
            messages.push(this.attack(defender));
            if (defender.life > 0) {
                messages.push(defender.attack(this));
            }
        }
        if (this.life > 0) {
            messages.push(`${this.name} a vaincu ${defender.name} !`);
        } else {
            messages.push(`${defender.name} a vaincu ${this.name} !`);
        }
        return messages;
    }

    takeDamage(damage) {
        this.life = this.life - damage <= 0 ? 0 : this.life - damage;
    }
}

class Enemy extends Fighter {
    constructor(name, strength, dexterity) {
        super(name, strength, dexterity, `${name} attaque !`);
    }

    chooseAttack() {
        const random = Math.random();
        if (random < 0.7) {
            return this.attack;
        } else {
            return this.specialAttack;
        }
    }

    specialAttack(defender) {
        const damage = this.calculateDamage(defender) * 2;
        defender.takeDamage(damage);
        return `${this.name} lance une attaque spéciale sur ${defender.name} (${damage} points de dégâts)`;
    }
}

module.exports = {
    Fighter,
    Enemy
};
