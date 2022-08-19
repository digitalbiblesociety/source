import { writable } from 'svelte/store';
import { context } from '../Context.js';

export default class Columns {
	
	create(data, states, filters, options) {
		this.id = states.id.get();
		const { subscribe, set, update } = writable([]);
		return { subscribe, set, update,
			get: (self) => {
				let $columns;
				self.subscribe((store) => ($columns = store));
				return $columns;
			},
			sort: (element, key, context) => {
				if (options.get(options).sortable !== true || typeof key === 'undefined') {
					return;
				}

				let sortDir = element.classList.contains('asc') ? 'desc' : 'asc';
				Array.from(element.parentNode.children).forEach((item) => item.classList.remove('asc', 'desc'));
				element.classList.add(sortDir);
				
				data.sort(key, sortDir);
				states.pageNumber.set(1, context);
			},
			filter: (key, value, operation) => {
				states.pageNumber.set(1);
				filters.localFilters.add(key, value, operation);
			}
		};
	}

	get(id) {
		return context.get(id).getColumns();
	}

	getData(id) {
		const columns = context.get(id).getColumns();
		return context.get(id).getColumns().get(columns);
	}
}
