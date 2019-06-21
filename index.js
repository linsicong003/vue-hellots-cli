/*
*  @Description: A TypeScript template with Vue
*  @Operation:  Use init xxx to cearte your project
*  @Template repo: https://gitlab.deeptel.com.cn:linsicong/vue-ts-template
* */

// 处理输入命令
const program = require('commander');
// 从仓库下载
const download = require('download-git-repo');
// 命令行交互项
const inquirer = require('inquirer');
// 模板渲染
const handlerbars = require('handlebars');
// 下载动画
const ora = require('ora')
// 字体颜色
const chalk = require('chalk')
// 图标显示
const symbols = require('log-symbols')
// 文件处理
const fs = require('fs')

program.version('1.0.0', '-v, --version')
	.command('init <name>')
	.action((name) => {
		if (!name) {
			// 判断是否传入文件夹名
			console.log(symbols.error, chalk.red('Can not create a project without project name!'));
		} else if (name && !fs.existsSync(name)) {
			// 初始化
			inquirer.prompt([
				{type: 'input', name: 'description', message: '项目描述：'},
				{type: 'input', name: 'author', message: '作者：'},
				{type: 'input', name: 'version', message: '版本号：'}
			]).then((answers) => {
				const spinner = ora('Preparing the project...');
				spinner.start();
				download('https://gitlab.deeptel.com.cn:linsicong/vue-ts-template#master', name, {clone: true}, (err) => {
					if (err) {
						spinner.fail();
						console.log(symbols.error, chalk.red(err));
						process.exit(0)
					} else {
						spinner.succeed();
						const meta = {
							name,
							...answers
						}
						const fileName = `${name}/package.json`;
						if (fs.existsSync(fileName)) {
							const content = fs.readFileSync(fileName).toString();
							const result = handlerbars.compile(content)(meta);
							fs.writeFileSync(fileName, result);
						}
						console.log(symbols.success, chalk.green(`Created ${name} successfully !!`));
						process.exit(0)
					}
				})
			})
		} else {
			// 错误提示项目已存在，避免覆盖原有项目
			console.log(symbols.error, chalk.red('Project already exist!'));
			console.log(symbols.warning, chalk.red('Please delete it at first or use the other project name'));
			process.exit(0)
		}
	});
program.parse(process.argv);
