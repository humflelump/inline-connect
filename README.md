# Installation

```
yarn add inline-connect
```

# Example

```javascript
const App = () => {
  const fields = useSelector((state: State) => state.Component1.fields);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {fields.map((str, index) => {
        return (
          <Connected
            selectors={[(state: State) => state.Component1.fields[index]]}
            actions={[
              (e: any) =>
                dispatch({ type: "SET_FIELD", index, value: e.target.value })
            ]}
          >
            {str => log => {
              return <input value={str} onChange={log} />;
            }}
          </Connected>
        );
      })}
    </div>
  );
};
```
