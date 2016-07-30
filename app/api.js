/**
 * Created by Vladimir on 7/30/2016.
 */

import $ from 'jquery';

class Entity {
	constructor(url) {
		this.url = url;
	}

	getAll() {
		return $.get(this.url);
	}

	post(entity) {
		return $.post(this.url, entity);
	}
}

const api = {
	tasks: new Entity('/api/tasks')
};

export default api;