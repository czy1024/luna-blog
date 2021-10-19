---
title: Docker 架构
date: 2020-06-03
banner_img: /img/docker.jpg
index_img: /img/docker.jpg
sidebar: 'auto'
isShowComments: true
tags: 
 - docker
categories:
 - basic-component
 - docker
---

### 1. 前言

docker架构设计参考文章进行整理：地址为<https://www.huweihuang.com/article/docker/docker-architecture/>

这一篇文章源于2015年出版的《docker源码分析》，书中以docker1.2.0版本进行分析。但是在docker1.11以后，docker的架构就在不断的优化和拆分。下面整理出了docker框架的变迁史，可以稍作参考。

### 2. 架构设计

![](./img/docker/docker-architecture.png)

