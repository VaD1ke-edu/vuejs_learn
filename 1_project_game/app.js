new Vue({
    el: '#app',
    data: {
        isStarted: false,
        player: {
            startHp: 100,
            hp: 100,
            damage: {
                min: 3,
                max: 10
            },
            specialDamage: {
                min: 5,
                max: 15
            },
            heal: {
                minHp: 5,
                maxHp: 15
            }
        },
        monster: {
            startHp: 100,
            hp: 100,
            damage: {
                min: 4,
                max: 14
            },
            heal: {
                minHp: 2,
                maxHp: 6
            }
        },
        logs: []
    },

    methods: {
        start: function () {
            this.player.hp  = this.player.startHp;
            this.monster.hp = this.monster.startHp;
            this.isStarted  = true;
            this.logs       = [];
        },

        heal: function () {
            let healHp;

            healHp = this._heal(this.player);
            this._logHeal('player', healHp);

            healHp = this._heal(this.monster);
            this._logHeal('monster', healHp);
        },

        attack: function () {
            let damageVal;

            damageVal = this._hit(this.player, this.monster);
            this._logHit('player', 'monster', damageVal);

            damageVal = this._hit(this.monster, this.player);
            this._logHit('monster', 'player', damageVal);
        },

        specialAttack: function () {
            let damageVal;
            damageVal = this._hit(this.player, this.monster, this.player.specialDamage);
            this._logHit('player', 'monster', damageVal);

            damageVal = this._hit(this.monster, this.player);
            this._logHit('monster', 'player', damageVal);
        },

        giveUp: function () {
            this.player.hp = 0;
        },


        _hit: function (attacker, victim, damage) {
            damage = damage || attacker.damage;
            const damageVal = this._rand(damage.min, damage.max);
            victim.hp = Math.max(victim.hp - damageVal, 0);
            return damageVal;
        },

        _heal: function (player) {
            let healHp = this._rand(player.heal.minHp, player.heal.maxHp);
            healHp = Math.min(player.startHp - player.hp, healHp);
            if (healHp) {
                player.hp += healHp;
            }
            return healHp;
        },

        _logHit: function (attacker, victim, damage) {
            const className = attacker + '-turn';
            const message   = attacker + ' hits ' + victim + ' for ' + damage;
            this.logs.unshift({ className: className, message: message });
        },

        _logHeal: function (player, hp) {
            this.logs.unshift({ className: 'heal', message: player + ' heals himself for ' + hp });
        },

        _rand: function (min, max) {
            return Math.round(Math.random() * (max - min) + min);
        },

        _calcPercent: function (val, maxVal) {
            return Math.round(val / maxVal * 100);
        },

        notifyAboutEnd: function (message) {
            alert(message);
        }
    },

    computed: {
        playerHpPercent: function () {
            return this._calcPercent(this.player.hp, this.player.startHp);
        },

        monsterHpPercent: function () {
            return this._calcPercent(this.monster.hp, this.monster.startHp);
        },

        checkFinish: function () {
            const isPlayerDefeated  = this.player.hp <= 0;
            const isMonsterDefeated = this.monster.hp <= 0;
            if (isPlayerDefeated) {
                this.notifyAboutEnd('Congratulations, you won');
            }
            if (isMonsterDefeated) {
                this.notifyAboutEnd('Unfortunately you failed');
            }
            return isPlayerDefeated || isMonsterDefeated;
        }
    }
});
