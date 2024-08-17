# 基於官方 Node.js 映像
FROM node:16

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用代碼
COPY . .

# 暴露端口
EXPOSE 8080

# 啟動應用
CMD ["npm", "start"]
