use myblog;
show tables;
insert into users (username,`password`,realname) values ('zhangsan','123','张三');
insert into users (username,`password`,realname) values ('lisi','123','李四');
select * from users;
select id,username from users;
select * from users where username='zhangsan' and `password`='123';
select * from users where username='zhangsan' or `password`='123';
select * from users where username like '%zhang%'; -- 模糊查询
select * from users where password like '%1%' order by id; -- 顺序
select * from users where password like '%1%' order by id desc; -- 倒序
update users set realname='李四2' where username='lisi'; -- 更新    会报错
SET SQL_SAFE_UPDATES=0; -- 解决上面那个报错
delete from users where username='lisi'; -- 删除  数据直接没了  通常不用这种，采用软删除
select * from users where state='1';
update users set state='0' where username='lisi'; -- 软删除  给每一项增加一个state字段.表示删除或者保留。查数据的时候根据状态去查
select * from users where state<>'0'; -- 查找状态不等于0， 即未被删除。  