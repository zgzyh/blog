# 利用SFC工具与Dism工具尝试修复系统


如果某些 Windows 功能不工作或 Windows 崩溃，我们可以使用使用系统文件检查功能扫描 Windows 缺失或损坏的文件并还原文件

本文内容包括
------

*   使用Dism映像部署工具诊断和修复系统 
    *   基本原理
    *   快速检查 (CheckHealth)
    *   深入扫描 (ScanHealth)
    *   修复系统 (RestoreHealth)
    *   使用 install.wim 作为修复源（可选）

*   使用sfc系统检查工具诊断和修复系统 
    *   基本原理
    *   方法

*   总结

一、使用Dism映像部署工具诊断和修复系统
-------------------

### 1.基本原理

DISM可以联网将你当前的系统文件和官方的原镜像进行比对，然后恢复与官方映像不一样的文件，从而达到修复的目的

### 1-1.快速检查 (CheckHealth)

DISM 的`/CheckHealth`参数相当于给你的电脑做一个快速体检，它能够快速检测系统是否存在明显的问题，但不会进行深入的诊断或修复：

/


1.   使用`Windows + R`快捷键打开「运行」对话框，输入`cmd`，然后按`Ctrl + Shift + Enter`以管理员权限打开「命令提示符」。**（一定要以管理员身份运行！）**
2.   执行以下命令，检查本地映像是否存在数据损坏：

```bash
DISM /Online /Cleanup-Image /CheckHealth
```
如果系统没有问题，你会看到「未检测到组件存储损坏」提示。如果检测到问题，则会显示「组件存储已损坏」

### 1-2.深入扫描 (ScanHealth)

如果 CheckHealth 没有发现，但 Windows 还是存在问题，可以使用`/ScanHealth`参数进行更深入的扫描。这会彻底检查「组件存储」是否存有损坏，并将结果保存到日志文件中：

1.   使用`Windows + R`快捷键打开「运行」对话框，输入`cmd`，然后按`Ctrl + Shift + Enter`以管理员权限打开「命令提示符」。**（一定要以管理员身份运行！）**
2.   执行以下命令，进行更全面的检查：
```bash
DISM /Online /Cleanup-Image /ScanHealth
```
这个过程会比较耗时，扫描完成后，如果发现问题，可以继续执行下一步来修复 Windows 映像。

### 1-3.修复系统 (RestoreHealth)

如果前两步发现了问题，可以使用 RestoreHealth 参数来修复 Windows 10/11 系统映像：

1.   使用`Windows + R`快捷键打开「运行」对话框，输入`cmd`，然后按`Ctrl + Shift + Enter`以管理员权限打开「命令提示符」。
2.   执行以下命令，修复本地系统映像：
```bash
DISM /Online /Cleanup-Image /RestoreHealth
```
::: tip 提示

> 注意：此命令需要互联网连接，因为需要从 Windows Update 下载修复文件。修复过程比较耗时，请耐心等待。

:::

### 1-4.使用 install.wim 作为修复源（可选）

如果你的电脑无法连接到互联网，或者要修复「Windows 更新」组件本身，可以手动挂载 Windows 安装镜像，并指定`install.wim`或`install.esd`作为修复源：

1.   前往[Microsoft镜像下载中心](https://www.microsoft.com/zh-cn/software-download/)或[Itellyou](http://next.itellyou.cn/)等地方下载Windows原版ISO镜像，ISO 版本要与你当前系统版本相同。例如，如果你使用的是 Windows 11 23H2，就别挂载个 22H2 来修复。
2.   双击下载的 ISO 文件，系统会自动将其挂载为虚拟光驱。记住系统分配给该虚拟光盘的盘符，例如`E:\`![Image 9: 查看虚拟光驱盘符](https://wyyzxzyg.cn/wp-content/uploads/2025/02/1738628399-IMG_3558.jpeg)
3.   使用`Windows + R`快捷键打开「运行」对话框，输入`cmd`，然后按`Ctrl + Shift + Enter`以管理员权限打开「命令提示符」。
4.   执行以下命令，从指定源文件修复系统（请将 E: 替换为实际的盘符）
```bash
DISM /Online /Cleanup-Image /RestoreHealth /Source:E:\Sources\install.wim /LimitAccess
```
如果不使用`/LimitAccess`参数，DISM 会先尝试使用「Windows 更新」查找修复源文件。如果无法连接到 Windows Update 或找不到所需文件，才会使用`/Source`参数中指定的`install.wim`或`install.esd`文件。

DISM 提供了快速检查、深入扫描和修复映像共三大核心系统修复功能，通过以上步骤，你可以对 Windows 10/11 系统进行诊断和修复。帮助你轻松解决系统中的各种疑难杂症，保持电脑的最佳运行状态。

二、使用sfc系统检查工具诊断和修复系统
--------------------

### 2-1.基本原理

SFC命令的基本原理是使用哈希算法对系统文件进行校验和验证。 每个系统文件都有一个与之相关联的唯一哈希值，该哈希值是通过对文件内容进行计算得到的。 在运行SFC命令时，系统会计算当前系统文件的哈希值，并与事先存储的正确哈希值进行比对。 如果发现哈希值不匹配，说明文件可能已经受到破坏或篡改，SFC会尝试替换为正确的文件版本。

### 2-2.使用方法

1.   使用`Windows + R`快捷键打开「运行」对话框，输入`cmd`，然后按`Ctrl + Shift + Enter`以管理员权限打开「命令提示符」。
2.   在**“命令提示符”**窗口中，键入以下命令，然后按 Enter
```bash
sfc /scannow
```
 `sfc/scnnow`将检查受保护的系统文件，并将损坏的文件替换为缓存的副本。 此过程完成后，将显示扫描结果。

| 扫描结果信息 | 相应操作 |
| ----- | ----- |
| Windows 资源保护找不到任何完整性冲突。 | 没有任何丢失或损坏的系统文件，无须操作。若要解决此问题，请在[安全模式下](https://support.microsoft.com/windows/windows-startup-settings-1af6ec8c-4d4a-4b23-adb7-e76eef0b847f)执行系统文件检查器扫描。 |
| Windows 资源保护无法执行请求的操作。 | 确保**PendingDeletes**和**PendingRenames**文件夹位于 **%WinDir%\WinSxS\Temp**下。`%WinDir%`占位符表示 Windows 操作系统文件夹，例如 C：\Windows。 |
| Windows 资源保护发现损坏的文件并成功修复了这些文件。操作成功。 | 若要查看有关系统文件扫描和还原的详细信息，请转到[如何查看系统文件检查器进程的详细信息](https://support.microsoft.com/zh-cn/topic/%E4%BD%BF%E7%94%A8%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6%E6%A3%80%E6%9F%A5%E5%99%A8%E5%B7%A5%E5%85%B7%E4%BF%AE%E5%A4%8D%E4%B8%A2%E5%A4%B1%E6%88%96%E6%8D%9F%E5%9D%8F%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6-79aa86cb-ca52-166a-92a3-966e85d4094e#bkmk_cbs_log)。 |
| Windows 资源保护发现损坏的文件，但无法修复其中一些文件。 | 若要手动修复损坏的文件，请查看[系统文件检查器进程的详细信息](https://support.microsoft.com/zh-cn/topic/%E4%BD%BF%E7%94%A8%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6%E6%A3%80%E6%9F%A5%E5%99%A8%E5%B7%A5%E5%85%B7%E4%BF%AE%E5%A4%8D%E4%B8%A2%E5%A4%B1%E6%88%96%E6%8D%9F%E5%9D%8F%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6-79aa86cb-ca52-166a-92a3-966e85d4094e#bkmk_cbs_log)查找损坏的文件，然后[手动将损坏的文件替换为已知完好的文件副本](https://support.microsoft.com/zh-cn/topic/%E4%BD%BF%E7%94%A8%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6%E6%A3%80%E6%9F%A5%E5%99%A8%E5%B7%A5%E5%85%B7%E4%BF%AE%E5%A4%8D%E4%B8%A2%E5%A4%B1%E6%88%96%E6%8D%9F%E5%9D%8F%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6-79aa86cb-ca52-166a-92a3-966e85d4094e#bkmk_cbs_log)。


总结
----

以上就是介绍Dism与SFC工具修复Windows系统的所有内容了，若有任何疑问或建议欢迎在评论区中指出


