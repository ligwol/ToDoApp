<script>
    let tasks = []
    let newTaskTitle = '';

    function addTask(e) {
        e.preventDefault();
        tasks = [
            ... tasks,
            {
                id: Math.random().toString(36).substr(2,9),
                title: newTaskTitle,
                complete: false
            }
        ]
        newTaskTitle = '';
    }

    function deleteTask(id) {
        let tmp = tasks;
        let index = tmp.findIndex(task => task.id === id);
        tmp.splice(index, 1);
        tasks = tmp;
    }

    function completeTask(id){
        let tmp = tasks;
        let index = tmp.findIndex(task => task.id === id);
        tmp[index].complete = true;
        tasks = tmp;
    }
</script>

<section>
    <form class="app-form" on:submit={addTask}>
            <input type="text" placeholder="Add new task" bind:value={newTaskTitle}>
        <button type="submit" disabled={!newTaskTitle}>
            <i class="fas fa-plus"></i>
        </button>
    </form>
    <ul>
        {#each tasks as task}
            <li class={task.complete ? 'app-complete' : ''}
            on:click="{() => {completeTask(task.id)}}">
                <span>
                    {task.title}
                </span>
                <button class="app-check">
                    <i class="fas fa-check"></i>
                </button>
                <button class="app-remove" on:click={() => {deleteTask(task.id)}}>
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    
    button {
        background-color: #f0f0f000;
        border: none;
        cursor: pointer;
        transition: .3s ease;
    }

    form {
        display: flex;
        margin: 1rem 0;

        input {
            flex-grow: 1;
            border-radius: .2rem;

            &:focus {
                outline: 0;
            }

            &::placeholder {
                color: #25252536;
            }
        }

        &:disabled {
            opacity: .4;
            pointer-events: none;
        }
    }

    i {
        &:hover {
            transition: ease 700ms;
            transform: scale(1.1);
        }
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        max-width: 420px;
        flex-wrap: wrap;

        li {
            display: flex;
            background-color: #f0f0f0;
            border-radius: .7rem;
            padding: .2rem .7rem;
            align-items: center;
            margin: 0 .5rem .5rem 0;

            span {
                padding-right: 1rem;
            }

            &.app-complete {
                text-decoration: line-through;
                background-color: #949494;
                cursor: default;
            }
        }
    }
</style>