import bookshelf from '../bookshelf';
console.log("model hit")
export default bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true
});

