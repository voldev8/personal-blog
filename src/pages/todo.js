import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import todoList from "/static/todo.json"

const Todo = () => {
  return (
    <Layout title={"Project To Do list"}>
      <Seo
        title="To-Do list"
        keywords={[`to-do`, `about`, `project`, `planning`]}
      />
      <Paper>
        <Pattern>
          <TodoList>
            {todoList.map((todo, i) => (
              <Item key={i}>
                <Title>{todo.title}</Title>
                {todo.completed && <Completed>&#10004;</Completed>}
                <ItemDetailList>
                  {todo.tasks.map((task, i) => (
                    <ItemDetail key={i}>{task}</ItemDetail>
                  ))}
                </ItemDetailList>
              </Item>
            ))}
          </TodoList>
        </Pattern>
      </Paper>
    </Layout>
  )
}

const Paper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin: 2rem auto;
  box-shadow: 0px 0px 5px 0px #888, 3px 3px 0 0px #eee, 3px 3px 5px 0 #888,
    5px 5px 0 0px #eee, 5px 5px 5px 0 #888, 7px 7px 0 0px #eee,
    7px 7px 5px 0 #888, 10px 10px 0 0px #eee, 10px 10px 5px 0 #888;
`
const Pattern = styled.div`
  background-color: rgba(225, 225, 221, 0.6);
  background-image: linear-gradient(
      rgba(145, 152, 229, 0.3) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(145, 152, 229, 0.2) 1px, transparent 1px),
    linear-gradient(rgba(145, 152, 229, 0.2) 2px, transparent 2px),
    linear-gradient(90deg, rgba(145, 152, 229, 0.2) 2px, transparent 2px),
    linear-gradient(rgba(145, 152, 229, 0.1) 4px, transparent 4px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px, -1px -1px;
`
const TodoList = styled.ul`
  padding: 2.6rem 0 2.6rem 3.5rem;
  list-style-type: decimal;
  font-size: 1.6rem;
  font-family: "Gloria Hallelujah", cursive;
  @media (max-width: 650px) {
    padding-left: 1rem;
  }
`

const Item = styled.li`
  &::marker {
    font-size: 2rem;
    font-weight: 800;
  }
`
const Title = styled.span`
  font-weight: 600;
`
const Completed = styled.span`
  color: red;
  padding-left: 1rem;
  font-size: 3rem;
`
const ItemDetailList = styled.ul`
  margin: 0;
  padding: 0 0.4rem;
  list-style: none;
  line-height: 2.5rem;
`
const ItemDetail = styled.li`
  margin: 0;
  padding-top: 1.1rem;
  &::before {
    position: relative;
    top: -0.1rem;
    content: "●";
    padding-right: 0.2rem;
    color: crimson;
  }
`

export default Todo
