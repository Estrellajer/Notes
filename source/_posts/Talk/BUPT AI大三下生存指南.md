---
title: BUPT AI大三下生存指南
date: 2024-07-04 11:29:18
tags:
  - 课程
categories:
  - Talk
updated: 2024-08-13
---


主要内容是AI大三下各个选修课和必修课的主观感受，so仅供参考。

从必修课开始讲起

### NLP

###### 教师：王小捷老师

#### 考核方式：

##### 教材阅读 (4x6=24分)

- 阅读JMBook的其中4章: chap6\7\9\10，在教学云平台上规定的时间点。
  
- 阅读报告内容:
  
    - 章节内容综述
      
    - 提出至少1个问题
      
    - 全文至少1页 (A4纸，5号单倍行距编码作业)
      

##### 编码作业（2 x 16分）

- SGNS词向量实现与评估、Transformer序标实现与评估 (2次*16分/次 = 32分
  

课程参与 (4分)

- 课堂、课下交流，各种对课程的反馈等参与度
  

##### 课程大作业 (40分, 3人一组)

- 从某个研究问题(或应用需求)出发，基于**三种课上讲的NLP技术进行**解决方案的设计和实现
  
- 任务需求分析 (5分)
  
- 技术方案设计 (10分)
  
- 课程作业报告:
  
    - 实现、结果及分析 (25分)
      

#### 课程感受：

**授课水平**：王老师是AI比较知名的科研牛导，讲课很细致，如果基础不是很牢固的话还是很建议听的，尤其是和自己目前学习方向如果有重合的内容王老师的课程可以帮助你节省不少时间。

**如何拿分**：这门课以前好像是考试课，现在改成考察后相对应的各种大小作业占比很高。

- **阅读作业**，建议从长远角度出发还是认真看JMBook，但是想要稳定的中上的分数可以：从每个章节挑点话翻译，然后拼凑出来不短的篇幅即可。我的分数是两次算是中上，两次中。前面提到的技巧是后来从舍友哪里学到的，还有就是用latex卷格式意义不大，当然只是身边案例。
  
- **编码作业**，我们是一个班配置8个助教，所以你的代码是会被上机跑的，so首先**不要抄袭**。其次拿报告来说这个卷格式就是有用的了，latex或者markdown都行，按照发的材料要求的每条内容都撰写清楚，还有就是在开头最好给出任务的拆解（助教讲作业说的，画图标清曲线对应的参数模型等）。最后说说具体的实现代码，良好的注释自然是不必说的（如果是gpt给你生的注意统一中英文，别注释的语言都不统一），其次就是性能，优秀代码的必要条件就是抛出来的result得分高，当然老师是不会给测试集的。第二份作业拿了优秀，放在对应的文件夹里了。
  
- **大作业**，这个应该很重要的。本来以为nlp没法上90，最终课程出分**91**，感觉就是大作业验收效果比较好。我分到的是两个助教学姐，我讲的很多她们就基本问不出什么问题。
  
- **签到**，按班级的学号顺序点人回答问题，只要在场就行。
  

**课程小结**：48学时本来应该只有32的授课学时，但是老师都用来讲课了，这就导致你想保质保量完成作业压力不算小，在课上经常看到很多同学赶作业。而且保研提上进程，不少同学都忙着进组或者夏令营。种种因素下课程听课的人不多，前半学期事不多的时候每节课前我都会学一下cs224n的对应部分，课上再做做笔记，后半期课听的也就不多了。但是平心而论这门课整体质量算是中上，值得一听，如果阅读至此的诸君在平日学习游刃有余的话还是建议听课同时学一下cs224n的内容的。

---

### 计算机视觉

###### 教师：鲁鹏老师

#### 考核方式：
- 平时成绩: 30%(2次作业+出勤)
  
- 课程设计: 30%
  
- 期末考试: 40%
#### 课程感受：

**授课水平**：鲁鹏老师的课程放到B站还有很多同学去看，其水平可见一斑。上了三年学，毫不夸张的说鲁鹏老师的课是目前唯一让我知道我在学习什么，我为什么要学习这些内容，学习这些内容有什么用，而非许多课只会重复人工智能的三起三落。

**如何拿分**：
**更新：**  最终出分**90**，没之前学长学姐说的85那么低，应该认真做作业（尤其是大作业），考试好好准备就不低。

非常遗憾，这门课给分不高，所以我仅能从个人经验提一些建议：

小作业svm分类那个用老师讲的特征指标大概是不用的两倍（给的参考论文就是这个东西），这个作业截止了我和同学才发现这个东西，不知道是否影响判分，但是想必多少是有影响的。

签到的话只有人比较少才会点名。

大作业的话就是各显神通，注意要做出来完整的系统，还有就是目标追踪有拿较高分数的。

##### 24春考试题目（考完第二天回忆的，有差错别怪我）：

**简答题：**

第一题是计算机视觉的定义和难点（很多同学会发现学了一学期说不出来什么是计算机视觉，难点的话我写的是鲁鹏老师线下课程总结说的无法像nlp一样自监督进行训练），其他都是好找的，比如hough流程以及优缺点，相机标定过程等。

**设计题：**

1.传菜机器人（双目立体视觉系统），不是平行视图，相机为标定

2.乒乓球陪练，房间四角四个未标定的相机重建乒乓球位置

3.作业题那个圆检测

4.作业题图像分类

5.角点检测系统设计

6.目标检测，给一张图片，标出道路，行人，车辆等bounding box

7.相机对准一个禁止停车的地方，要求实现有违规停车时给出提醒

tips：1.资料一定要装订好，我的资料散了，canny的那页内容找不到了，还好记了大概

**课程小结**：48学时本来应该只有32的授课学时，但是老师都用来讲课了，这就导致你想保质保量完成作业压力不算小，在课上经常看到很多同学赶作业。而且保研提上进程，不少同学都忙着进组或者夏令营。种种因素下课程听课的人不多，前半学期事不多的时候每节课前我都会学一下cs224n的对应部分，课上再做做笔记，后半期课听的也就不多了。但是平心而论这门课整体质量算是中上，值得一听，如果阅读至此的诸君在平日学习游刃有余的话还是建议听课同时学一下cs224n的内容的。

---

### 智能信息网络实验

###### 教师：谭咏梅老师

#### 考核方式：

**平时表现、小实验+大作业**：总评成绩将由平时表现和小实验（40%）以及大作业（60%）构成。

#### 课程感受：

**授课水平**：tym懂的都懂。

**如何拿分**：请tym当指导老师参加比赛

- **签到**，第二节课末或者第三节课课中点名，每次都点。

**课程小结**：这门课被我误打误撞发现了拿分要点。tym老师不知何原因应该是转教学岗了，她这个课的目的就是让你在**她的指导下**拿奖，所以选一个合适的比赛请tym当指导老师会舒服很多。大作业的选题不重要，只要让tym当指导老师就行，如果比赛有机会拿奖的话你会见到tym老师未曾轻易向学生展示的温柔一面。最后因为“小组作业组长做”导致比赛没拿奖喜提**“93”**。

---

### 语音信息处理

###### 教师：李雅老师

#### 考核方式：

**平时表现、三个小实验+大作业**：总评成绩将由平时表现和实验成绩（40%）以及大作业（60%）构成。

#### 分组大作业考核基本要求

- **自由分组**：需在第3次课前完成分组，每组4-5人，指定一位组长，并在报告中明确每位成员的贡献。
- 提交材料：
  1. **书面报告**：一次。
  2. **公开演讲**：一次。
- **格式**：报告格式应参照一般的论文格式。
- **提交方式**：报告需提前发送至老师邮箱 yli01@bupt.edu.cn，邮件主题格式为“队伍编号+作业主题”。具体提交时间待后续通知。
- **系统提交**：需提交完整的系统，包括数据和源代码。对于体积较大的文件，如预训练模型、数据等，可以上传至百度云，并在报告中附上下载链接。

#### 课程感受：

**授课水平**：中规中矩，平均水平，如果不是有志于此的方向不建议去听。

**如何拿分**：最后的大作业答辩尽力展示**自己**。

- **课程实验**，都不难，很好水，能回答出来助教的问题就行。
- **大作业**，很重要，关键性决定因素。最好找稍微靠谱但能力不如你的同学组队。最后是”李蓝天“负责的答辩，会问很多细致的问题，谁被拷打且回答的满意会有很高的分（如果你不是上去讲的人的话即使出力多分数也不会高）。难度高的选题分数不如难度低的组的最高分，所以你应该知道怎么组队了吧。
- **签到**，说过两次签到，但是一次都没签，去的人也不多。

**课程小结**：这课和混的同学组的队，我负责了一次实验，大作业通过我一个人做NLP来交换这个课大作业由别人负责结果就是DDL前五天他们才开始搞，最后验收时负责技术的还睡过头了，最终得分远低于平均。幸好博主的成绩保外不足，保内有余，要不然这课分差还是蛮大的，只能安慰自己没在这门课上浪费时间了。

---

### 脑认知

###### 教师：仲苏玉老师

#### 考核方式：

**平时表现（随堂小测），作业+开卷考试**

#### 课程感受：

**授课水平**：仲苏玉老师是大一C++的授课老师，这么多年过去老师也深谙授课之道，虽然讲的不怎么样。

**如何拿分**：开卷考试考好。

- **开卷考试**，**买书！买书！买书！**。
- **作业**，老师直接忘记布置了，最后才布置，gpt之类的水一下就行。
- **随堂小测**，感觉是让别人代交也行，随便写写即可。

**课程小结**：这课也是浪费时间的水课，重点再说下期末。期末的开卷老师给个ppt有很多复习题，但是没有书你很多问题是回答不上来的。另外有能力的最好找前辈要下往年题让gpt模拟点大题学习一下思路。最后没书的我和舍友83,75；拿我部分资料且有书的同学91。

---

### Linux

不细说了，基本人均**“95”**，老师就点了一次名还因为来25人签到50人恼羞成怒之后给作废了

---

### 学期总结

总的来说这学期的课不多，但是课程作业如果认真完成的压力不算小，如果是考研的同学建议及时开摆。保研的同学前面提到的一些课程还是建议认真学习的，要不然读研了还要补。还有就是尽早联系靠谱的老师，这里点名知名牛导xwr，变热门后养一堆实习生。最好早早找靠谱导师后开始进组沉淀，个人感觉如果想搞科研提前进组还是有必要的。找导师的话青椒里还是有挺不错的盲盒，建议仔细找找。想冲wxj，ycx这种热门导师的同学做好8月还找不到导师的准备，这俩老师据我了解只在夏令营各收了一个前十。如果有想了解导师的也可以在置顶文章的链接进去评论，如果我了解且能回答的话会回复。
