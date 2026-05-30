# AI Product Manager Portfolio

一个采用 **Kinetic Typography** 设计风格的 AI 产品经理个人作品集网站。基于 React + Vite + Tailwind CSS 构建。

## 🎨 设计特色

- **动态排版**：超大视口响应式字体，创造视觉冲击力
- **高对比配色**：深黑背景 + 酸黄强调色 + 灰白文字
- **扁平几何**：0px 圆角，2px 边框，无阴影的新野兽主义风格
- **动效系统**：
  - 无限滚动的跑马灯统计
  - Hero 区域视差效果
  - 卡片悬停颜色反转
  - 粘性滚动项目卡片堆叠
  - 自定义混合模式光标

## 📂 项目结构

```
my_web/
├── public/                    # 静态资源
│   └── vite.svg              
├── src/                       
│   ├── assets/               # 资源文件
│   ├── components/           # React 组件
│   │   ├── AboutSection.jsx      # 关于我区块
│   │   ├── ContactSection.jsx    # 联系方式区块
│   │   ├── CustomCursor.jsx      # 自定义光标
│   │   ├── Footer.jsx            # 页脚
│   │   ├── HeroSection.jsx       # 首屏 Hero
│   │   ├── Marquee.jsx           # 跑马灯
│   │   ├── Navigation.jsx        # 导航栏
│   │   └── WorksSection.jsx      # 作品展示区块
│   ├── pages/                # 页面
│   │   └── Home.jsx             # 主页
│   ├── services/             # API 服务（预留）
│   ├── utils/                # 工具函数（预留）
│   ├── routes/               # 路由配置（预留）
│   ├── App.jsx               # 应用根组件
│   ├── main.jsx              # 入口文件
│   └── index.css             # 全局样式
├── .eslintrc.cjs             # ESLint 配置
├── .gitignore                
├── index.html                # HTML 模板
├── package.json              
├── postcss.config.js         # PostCSS 配置
├── tailwind.config.js        # Tailwind 配置
├── vite.config.js            # Vite 配置
├── Stitch_prompt.md          # 原型图提示词
└── README.md                 
```

## 🛠️ 技术栈

- **React 18.2** - 前端框架
- **Vite 5.x** - 快速构建工具
- **Tailwind CSS 3.4** - 原子化 CSS 框架
- **Framer Motion 11.x** - 动画库
- **React Router 6** - 路由管理（预留）
- **Axios** - HTTP 请求（预留）

## 📦 安装依赖

```bash
npm install
```

## 🚀 开发

启动开发服务器（默认端口 3000）：

```bash
npm run dev
```

## 🏗️ 构建

构建生产版本：

```bash
npm run build
```

## 👀 预览

预览构建结果：

```bash
npm run preview
```

## 🎯 页面区块说明

### 1. Hero Section（首屏）
- 超大视口标题："AI PRODUCT MANAGER"
- 响应式副标题描述
- 三个 CTA 按钮：查看作品、联系我、了解更多
- 滚动视差效果：标题随滚动放大并淡出

### 2. Stats Marquee（统计跑马灯）
- 黄色背景无限滚动
- 展示关键数据：准确率、用户数、技能标签
- 持续动画，无渐变边缘

### 3. About Section（关于我）
- 左侧：粘性标题 "ABOUT ME"
- 右侧内容：
  - 职业描述文本
  - 三张哲学卡片（悬停黄色反转）
  - 技能标签组（产品工具 + AI 技术）

### 4. Works Section（精选作品）
- 三个项目卡片，采用粘性滚动堆叠效果
- 每个卡片包含：
  - 项目编号（装饰性大号数字）
  - 分类标签 + 项目标题
  - 项目描述
  - 统计数据（两列大数字）
  - 背景占位符（Material Icons）
- 悬停状态：整卡背景变黄，文字反色为黑

### 5. Contact Section（联系方式）
- 左侧：联系表单
  - 姓名、邮箱、消息三个输入框
  - 仅底部边框样式
  - 聚焦时边框变黄
  - 大号提交按钮（黄色背景）
- 右侧：社交链接卡片
  - 小红书、微信、GitHub
  - 悬停平移效果 + 背景反转

### 6. Footer（页脚）
- 品牌名称 + 版权信息 + 社交链接
- 响应式三栏布局（移动端堆叠）

## 🎨 设计系统配置

### 配色方案
```javascript
background: '#121319'         // 深黑背景
on-surface: '#e3e1ea'         // 灰白文字
tertiary: '#cccd00'           // 酸黄强调色
surface-container: '#1f1f25'  // 次级表面
surface-container-highest: '#34343b'  // 边框颜色
```

### 字体系统
```javascript
display-xl: Archivo Narrow (800) - clamp(5rem, 15vw, 12rem)
display-lg: Archivo Narrow (700) - clamp(3rem, 8vw, 6rem)
headline-md: Archivo Narrow (700) - 2.5rem
body-lg: Geist (400) - 24px
body-md: Geist (400) - 20px
label-mono: JetBrains Mono (500) - 14px
```

### 间距系统
```javascript
section-padding-v: 8rem      // 区块垂直间距
gutter: 1.5rem              // 页边距
stack-lg: 4rem              // 大间距
stack-md: 1rem              // 中间距
stack-sm: 0.5rem            // 小间距
```

## 🖱️ 交互特性

1. **平滑滚动**：点击导航自动滚动到对应区块
2. **活动状态高亮**：导航栏根据滚动位置高亮当前区块
3. **Hero 视差**：首屏文字随滚动缩放、平移、淡出
4. **卡片反转**：悬停时整卡背景/文字颜色硬切换（300ms）
5. **自定义光标**：150px 黄色圆形，混合模式 difference
6. **粘性堆叠**：作品卡片滚动时逐级堆叠（sticky positioning）
7. **按钮反馈**：悬停放大 1.05x，点击缩小 0.95x

## 🔧 自定义配置

### 修改配色
编辑 `tailwind.config.js` 中的 `colors` 对象。

### 调整字体
1. 更新 `index.html` 中的 Google Fonts 链接
2. 修改 `tailwind.config.js` 中的 `fontFamily`

### 修改内容
直接编辑对应的组件文件：
- Hero 文案：`HeroSection.jsx`
- 作品项目：`WorksSection.jsx` 中的 `projects` 数组
- 技能标签：`AboutSection.jsx` 中的 `skills` 数组
- 社交链接：`ContactSection.jsx` 中的 `socialLinks` 数组

## 📱 响应式设计

- **Mobile (< 768px)**：单列布局，保留大字体视觉冲击
- **Tablet (768px - 1023px)**：双列过渡
- **Desktop (1024px+)**：完整三列网格 + 全部动效

## 🚨 注意事项

1. **字体加载**：依赖 Google Fonts CDN，确保网络连接
2. **Material Icons**：导航和卡片图标需要联网加载
3. **自定义光标**：仅在桌面端（fine pointer）显示
4. **性能优化**：已使用 `will-change` 优化动画性能

## 📄 License

MIT

## 👨‍💻 作者

AI Product Manager Portfolio - 2024

