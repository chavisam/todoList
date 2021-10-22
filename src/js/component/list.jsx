import React, { useState } from "react";
import swal from "sweetalert";

export const List = () => {
	const [list, setList] = useState([]);

	const addTask = data => {
		setList([...list, data]);
	};

	const deleteTask = indexToDelete => {
		// ANOTHER POSSIBILITY TO DELETE
		// let del = [...list];
		// del.splice(indexToDelete, 1);
		// setList(del);

		setList(list.filter((e, i) => indexToDelete != i));
	};

	let newLI = list.map((item, index) => (
		<li key={index} className="list-group-item  container ">
			<div className="row">
				<div className="col  text-start ">{item}</div>
				<div
					className="col trash  text-end"
					onClick={() => {
						deleteTask(index);
					}}>
					X
				</div>
			</div>
		</li>
	));

	return (
		<div className="container">
			<div className="row">
				<div className="col mx-auto">
					<input
						className=" form-control"
						type="text"
						name="list"
						id="list"
						placeholder="Next thing to Do..."
						onKeyUp={e => {
							//that means that the key pressed is intro
							if (e.keyCode == 13) {
								// comprobar que no está vacío
								if (!e.target.value) {
									swal("Please insert a task item");
								} else {
									//comprobar si el valor existe
									list.indexOf(e.target.value) == -1
										? (console.log(
												"Añadiendo tarea " +
													e.target.value
										  ),
										  addTask(e.target.value),
										  console.log(list))
										: swal(
												"That item is already on the list!"
										  );
								}
							}
						}}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col mx-auto">
					<ul className="list-group">{newLI}</ul>
				</div>
			</div>
			{/* this is the list counter */}
			<div className="row">
				<div className="col mx-auto">
					<ul className="list-group">
						{list.length == 0 ? (
							<li className="list-group-item">
								No task, add a task!
							</li>
						) : (
							""
						)}
						<li className="list-group-item text-muted text-start counter">
							{list.length} Items left
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
