import * as vscode from 'vscode'; 

export function activate(context: vscode.ExtensionContext) {
	vscode.commands.executeCommand("workbench.action.tasks.build");
}