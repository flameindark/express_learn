import User from '../models/user.model';


function load(req, res, next, id) {
    User.get(id)
        .then((user) => {
            req.user = user;
            return next();
        })
        .catch(e => next(e));
}
/**
 * 获取用户
 * @returns {User}
 */
function get(req, res) {
    return res.json(req.user);
}
/**
 * 新建用户，注册
 * @property {string} req.body.username - 用户名
 * @property {string} req.body.mail - 邮箱
 * @property {string} req.body.password - 密码
 */

function create (req, res, next){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save()
        .then(savedUser => res.json({
            error: 0,
            data: '注册成功'
        }))
        .catch(e => next(e));
}

/**
 * 更新用户信息
 * @property {string} req.body.username - 用户名
 * @property {string} req.body.mail - 邮箱
 * @returns 成功信息
 */
function update(req, res, next) {
    const user = req.user;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save()
        .then(saveUser => res.json({
            error: 0,
            data: '更新成功'
        }))
        .catch(e => next(e));
}

/**
 * 更新用户信息
 * @property {string} req.body.username - 用户名
 * @property {string} req.body.mail - 邮箱
 * @returns 成功信息
 */
function update(req, res, next) {
    const user = req.user;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save()
        .then(saveUser => res.json({
            error: 0,
            data: '更新成功'
        }))
        .catch(e => next(e));
}

/**
 * 获取用户列表
 * @property {number} req.query.skip ？
 * @property {number} req.query.limit ？
 * @returns {User[]} 用户列表
 */
function list(req, res, next) {
    const {limit = 50, skip = 0 } = req.query;

    User.list({ limit, skip})
        .then(users => {
            res.json(users)
        })
        .catch(e => next(e));
}

/**
 * 删除用户
 * @returns 成功信息
 */
function remove(req, res, next) {
    const user = req.user;
    user.remove()
        .then(res.json({
            error: 0,
            data: '删除成功'
        }))
        .catch(e => next(e));
}

export default { load, get, create, update, list, remove};