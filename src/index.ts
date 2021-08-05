import { terminal } from 'terminal-kit';

terminal.scrollUp(terminal.height + 1);
terminal.clear();
terminal("My name is ").green("walk8243");

setTimeout(() => {
	terminal.clear();
	terminal.bold.bgWhite.black("My name is walk8243");
}, 2 * 1000);
