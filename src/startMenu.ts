class StartMenu {
    private menuState: MenuState;
    constructor(menuState: MenuState) {
        this.menuState = menuState;
    }

    private newGame() {
        this.menuState.activeMenu = 'Character';
    }
}