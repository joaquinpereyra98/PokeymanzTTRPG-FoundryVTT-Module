/* Hooks.once('setup', async () => { // 'setup' = game system is partially loaded }); */
/* Hooks.once('ready', async function() { // 'ready' = FVTT is fully initialized and ready for operation });*/


Hooks.once('init', () => { // 'init' = FVTT is starting initialization
    class TrainerSheet extends game.swade.sheets.CharacterSheet{
        get template(){
            const base= 'systems/swade/templates/official/';
            if(!game.user.isGM && this.actor.limited)return base + 'limited.hbs';
            return "modules/PokeymanzTTRPG-FoundryVTT-Module/templates/sheet.hbs";
        }
        static get defaultOptions(){
            return foundry.utils.mergeObject(super.defaultOptions,{
            classes: ['pokeymanz', 'sheet', 'actor'],
            width: 650,
            height: 700,
            resizable: true
            });
        }
    }
    Actors.registerSheet('pokeymanz', TrainerSheet, {
        types: ['character', 'npc'],
        //makeDefault: true,
        label: 'POKEYMANZ.TrainerSheet',
    });
});